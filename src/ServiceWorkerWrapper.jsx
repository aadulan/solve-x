// https://felixgerschau.com/create-a-pwa-update-notification-with-create-react-app/

import { Alert, Button, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import * as serviceWorker from './serviceWorkerRegistration';
// service worker config has been removed from CRA / react-scripts 4.0
// https://github.com/facebook/create-react-app/issues/9776#issuecomment-728945921
// files sourced from https://github.com/cra-template/pwa/tree/master/packages/cra-template-pwa-typescript

const ServiceWorkerWrapper = () => {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState(null);

  const onSWUpdate = (registration) => {
    console.log('Out of date version detected! Triggering snackbar.');
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    console.log('Registering Service Worker for update detection...');
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const reloadPage = () => {
    // optional chaining was not working here...
    // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html
    waitingWorker && waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    setShowReload(false);
    // reload(b: Boolean) is deprecated
    window.location.reload();
  };

  return (
    <Snackbar open={showReload} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert
        severity="info"
        action={
          <Button color="inherit" variant="outlined" size="small" onClick={reloadPage}>
            Update
          </Button>
        }
      >
        A new version is available!
      </Alert>
    </Snackbar>
  );
};

export default ServiceWorkerWrapper;
