
function Header() {
    return (
        <div>
            <nav class="sticky bg-yellow-700 w-screen">
                <div class="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="flex flex-1 items-center justify-start sm:items-stretch">
                            <div class="hidden sm:block">
                                <div class="flex space-x-4">
                                    <a href="/" class="bg-yellow-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Homepage</a>

                                    <a href="/about" class="text-amber-50 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Me</a>

                                    <a href="/projects" class="text-amber-50 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                                    <a href="/contact" class="text-amber-50 hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;