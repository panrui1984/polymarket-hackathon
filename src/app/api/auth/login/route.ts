import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  const { username, password } = await request.json();

  // 固定账户校验
  if (username === 'admin' && password === 'admin') {
    const response = NextResponse.json({ success: true });

    response.cookies.set('auth_token', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1天有效
    });

    return response;
  }

  return NextResponse.json({ error: '账号或密码错误' }, { status: 401 });
}
