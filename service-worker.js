self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // Aquí puedes agregar cualquier acción que quieras que ocurra cuando se haga clic en la notificación
});

self.addEventListener('push', function(event) {
    const options = {
        body: 'El remontado ha terminado.',
        vibrate: [300, 150, 500],
        requireInteraction: true
    };

    event.waitUntil(
        self.registration.showNotification('Remontado Terminado', options)
    );
});