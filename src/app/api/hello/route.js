export async function GET(request) {
    return new Response(JSON.stringify({ message: "Hello Anas!" }), {
        headers: { 'Content-Type': 'application/json' },
    });
}
