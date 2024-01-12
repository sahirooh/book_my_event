const eventType = event?.type;

if(eventType === 'checkout.session.completed') {
    const {id, amount_total, metadata} = event.data.object;
}