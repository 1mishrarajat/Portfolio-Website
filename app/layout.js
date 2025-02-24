import localFont from "next/font/local";
// import "./globals.css";
 import"../app/Sign/Style.css";
import "../app/Login/Style1.css";
import"../app/Dashboard/style2.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


  

export const metadata = {
  title: "Welcome to my Portfolio",
  description: "PLEASE CHECK MY DETAILS AND CONTACT ME",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
