import { AppSidebar } from "@/components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4 w-full">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <div className="container mx-auto flex justify-between items-center ">
                            <div className="flex items-center gap-2">
                                <div className="bg-yellow-200 rounded-lg px-2 py-1 text-xs text-yellow-800">
                                    F3Mrzjsold 0.9802 SOL of SAM |mcap: $4.9K
                                    9wAkU7 created MUSKGO
                                </div>
                                <div className="bg-blue-200 rounded-lg px-2 py-1 text-xs text-yellow-800">
                                    CgCR2X created Mike
                                </div>
                            </div>
                            <ul className="flex space-x-4 ">
                                <li>
                                    <a href="#" className="hover:underline">
                                        <Button variant={"default"}>
                                            Create a new coin
                                        </Button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        <Button variant={"default"}>
                                            login
                                        </Button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <section className="flex w-full flex-col max-w-sm mx-auto items-center gap-2 p-4">
                    <h1 className="text-lg my-5">[Start a new coin]</h1>
                    <div className="flex w-full max-w-sm items-center gap-2">
                        <Input
                            type="text"
                            className="bg-primary text-white border-white"
                            placeholder="Seacrh for Token"
                        />
                        <Button type="submit" variant="default">
                            Search
                        </Button>
                    </div>
                </section>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="aspect-video rounded-xl bg-muted/50" />
                        <div className="aspect-video rounded-xl bg-muted/50" />
                        <div className="aspect-video rounded-xl bg-muted/50" />
                    </div>
                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
