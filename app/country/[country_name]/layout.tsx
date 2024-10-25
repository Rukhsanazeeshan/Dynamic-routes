
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
        <body className="bg-purple-400">
         

         
        
          {children}
        </body>
     
    );
}
 