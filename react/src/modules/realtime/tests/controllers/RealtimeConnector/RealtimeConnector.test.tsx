import { render } from '@testing-library/react';
import { RealtimeConnector } from '../../../controllers/RealtimeConnector';

test('test connection is started', () => {

    let isStarted = false;
    const realtimeConnection = {
        start: () => {
            isStarted = true;
        }
    };

    const config = {
        realtimeConnection
    }

    render(
        <ContainerProvider config={config}>
            <RealtimeConnector />
        </ContainerProvider>
    );

    expect(isStarted).toBe(true);
});