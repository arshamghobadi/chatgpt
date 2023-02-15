import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex">
          {/* {sidebarr} */}

          {/* {client provider} */}

          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
