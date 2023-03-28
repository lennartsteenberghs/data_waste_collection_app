/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.config.js > pwa > workboxPluginMode is set to "InjectManifest"
 */

import { precacheAndRoute } from 'workbox-precaching'

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST)


// background sync to put API requests in Queue

let createPostQueue = null
if (backgroundSyncSupported) {
  createPostQueue = new Queue('createPostQueue', {
    onSync: async ({queue}) => {
      let entry;
      while (entry = await queue.shiftRequest()) {
        try {
          await fetch(entry.request);
          console.log('Replay succesful for request', entry.request);
          const clients = await self.clients.matchAll({type: 'window'});
          for (const client of clients) {
            client.postMessage({
              msg: "offline-post-uploaded"
            })
          }
        } catch (error) {
          console.error('Replay failed for request', entry.request, error);

          //put entry back in the queue and re-throw the error:
          await queue.unshiftRequest(entry);
          throw error
        }
      }
    }
  })
}

if(backgroundSyncSupported){
  self.addEventListener('fetch', (event) => {
    if (event.request.url == 'https://eenurl/createPost' || event.request.url == 'localhost:3000/createPost') {
      // clone the request to ensure it's safe to read when adding to Queue
      if(!self.navigator.onLine) {
        const promiseChain = fetch(event.request.clone()).catch((err) => {
          return createPostQueue.pushRequest({request: event.request});
        });

        event.waitUntil(promiseChain);
      }
    }
  });
}
