const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="w-full bg-primary-50 min-h-screen
        bg-dotted-pattern bg-cover bg-fixed bg-center flex justify-center items-center">
            {children}
        </div>
    )
}

export default Layout