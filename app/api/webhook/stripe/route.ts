const eventType = event?.type;

if(eventType === 'checkout.session.completed') {
    const {id, amount_total, metadata} = event.data.object;

    const order = {
        stripeId: id,
        eventId: metadata?.eventId || '',
        buyerId: metadata?.buyerId || '',
        totalAmout: amount_total ? (amount_total / 100).toString() : '0',
        createdAt: new Date(),
    }
    
}