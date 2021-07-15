import config from '../config/default';

export function addTipData(tipData: any): Promise<Response> {
    return fetch(`${config.api.baseUrl}tips.json`,
        {
            method: 'POST',
            body: JSON.stringify(tipData),
        });
}

export function getTipData(): Promise<Response> {
    return fetch(`${config.api.baseUrl}tips.json`).then(
        (response) => response.json(),
    );
}
