import Nav from "../components/Nav";
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
        <body className="bg-teal-300">
          <Nav/>

         
        
          {children}
        </body>
     
    );
  }