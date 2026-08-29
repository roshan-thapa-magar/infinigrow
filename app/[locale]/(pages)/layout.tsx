// app/[locale]/(pages)/layout.tsx

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function WithHeaderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}