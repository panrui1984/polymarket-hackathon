'use client';

import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

// 必须使用 dynamic 导入并设置 ssr: false
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { 
  ssr: false,
  loading: () => <p>Loading API Documentation...</p>
});

export default function ApiDocsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ✅ 将 url 修改为绝对路径 "/api/docs" */}
      <SwaggerUI url="/api/docs" /> 
    </div>
  );
}