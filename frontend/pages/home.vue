<template>
    <div>
        <div class="flex flex-col vvsm:p-12 p-24 md:flex-row h-full place-items-center justify-center gap-16">
            <!-- Image Section -->
            <div class="vvsm:w-full md:w-1/2 md:flex md:overflow-hidden hover:shadow-lg hover:shadow-[#e7a93c] hover:rounded-3xl dark:hover:shadow-[#0ee2b7] hover:duration-1000">
                <NuxtLink to="/">
                    <img src="../assets/images/team.jpg" class="w-full rounded-3xl" alt="Team Image">
                </NuxtLink>
            </div>
            <!-- Text Section -->
            <div class="md:w-1/2">
                <span class="vvsm:text-4xl text-[42px] font-montserrat text-[#e7a93c] font-bold dark:text-[#0ee2b7]">WHO ARE WE ¿</span>
                <span class="vvsm:text-sm flex flex-row md:text-[16px] text-xl font-inter dark:text-slate-200 mt-4" style="line-height: 1.8;">
                    Welcome to WebApps, a dynamic club dedicated to comprehensive app development. Our diverse community focuses on a wide range of programming languages, tools, and cutting-edge technologies. From Kotlin and pure Java for Android app development, to web3 and blockchain technologies, including decentralized applications (dApps) and smart contracts, we cover it all.
                    In addition, we dive into the world of cryptocurrencies, exploring their underlying blockchain technology and the exciting possibilities of decentralized finance. Our members also gain expertise in web development, mastering frontend technologies such as HTML, CSS, React.js, Nuxt.js, Next.js, and Vue.js, along with Tailwind CSS for responsive design.
                    On the backend, we delve into Express.js, MySQL, Postman, and Node.js, enabling our members to build robust and scalable applications. And for those seeking a touch of elegance, we even venture into the realm of design, utilizing Figma for creating visually stunning interfaces.
                    With a strong focus on continuous learning, we strive to stay up-to-date with emerging frameworks and technologies. Join us at WebApps, where innovation, collaboration, and growth await you on the exhilarating journey of app development.
                </span>
            </div>
        </div>
        <div class="text-2xl dark:text-white text-black p-16">   
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea aliquam cupiditate doloremque eos harum eum autem non dolor voluptates amet officiis, quaerat tempore illum dignissimos ratione voluptatum voluptate illo aliquid.</span>
        </div>
        <div class="text-2xl dark:text-white text-black p-16">   
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea aliquam cupiditate doloremque eos harum eum autem non dolor voluptates amet officiis, quaerat tempore illum dignissimos ratione voluptatum voluptate illo aliquid.</span>
        </div>
        <!---Footer-->
        <div class="flex relative dark:text-white justify-center text-2xl font-inter gap gap-1">
            <span>Designed and developed By</span>
            <a href="https://www.linkedin.com/in/dinesh-srisanth-adari-860129249/" target="_blank" rel="noopener noreferrer" class=" text-[#e7a93c] hover:text-[#0ee2b7] hover:duration-300">
                <span>Dinesh SriSanth Adari</span>
            </a>
        </div>
    </div>
</template>