import type { EventHandler, EventHandlerRequest } from 'h3'

export const defineWrappedResponseHandler = <T extends EventHandlerRequest, D> (
    handler: EventHandler<T, D>
): EventHandler<T, D> =>
    defineEventHandler<T>(async event => {
        try {
            console.log(event)
            // do something before the route handler
            const response = await handler(event)
            // do something after the route handler
            return {
                success: true,
                data: response
            }
        } catch (err) {
            // Error handling
            return {
                success: false,
                err
            }
        }
    })