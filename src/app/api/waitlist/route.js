import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();

        const response = await fetch('https://9gke58jfd5.execute-api.us-east-1.amazonaws.com/Prod', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'Submission failed upstream' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('Proxy error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
