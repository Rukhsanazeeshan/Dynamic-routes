import Nav from "../components/Nav";
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <body>
          <Nav/>
          {children}
        </body>
     
    );
  }