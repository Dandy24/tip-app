export function submitTipDataHandler(tipData: any): Promise<Response> {
    return fetch('https://tip-app-54c1b-default-rtdb.europe-west1.firebasedatabase.app/tips.json',
        {
            method: 'POST',
            body: JSON.stringify(tipData),
        });
}
