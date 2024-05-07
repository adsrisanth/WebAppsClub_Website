<template>
  <div class="w-screen ssm:h-screen ssm:w-screen h-screen flex items-center justify-center bg-slate-100 dark:bg-gray-950 ">
    <div class="absolute ">
      <div class="flex justify-center place-items-center">
          <LoadingSignUp v-if="isLoading"/>
      </div>
    </div>
    <div class=" text-black dark:text-white sm:w-max-xl sm:mx-auto sm:m-[250px] sm:p-6">
      <div class="text-center text-[34px] font-bold mb-3">
        <span>SIGN UP</span>
      </div>
      <div class="text-center text-[14px] mb-6 text-gray-700 dark:text-gray-300">
        <span>Started with </span>
        <span class="text-[#0ee2b7]">WebApps!</span>
      </div>
      <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:gap-6">
        <div class="w-[320px] sm:w-1/2">
          <label for="firstName" class="mb-2">First Name</label>
          <input
            type="text"
            id="firstName"
            class="w-full h-12 border border-gray-500 dark:border-black bg-white dark:bg-gray-800 dark:text-white text-black placeholder-gray-600 dark:placeholder-gray-400 rounded-lg p-3 outline-none"
            placeholder="First Name"
          />
        </div>
        <div class="w-[320px] h-[42px] sm:w-1/2"> 
          <label for="lastName" class="mb-2">Last Name</label>
          <input
            type="text"
            id="lastName"
            class="w-full h-12 border border-gray-500 dark:border-black bg-white dark:bg-gray-800 dark:text-white text-black placeholder-gray-600 dark:placeholder-gray-400 rounded-lg p-3 outline-none"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <div class="mb-2">
          <span>Email</span>
        </div>
        <div class="flex-1 mr-2 w-">
          <input
            type="text"
            class="w-full h-[42px] border border-gray-500 bg-white dark:border-black dark:bg-gray-800 dark:text-white text-black placeholder-gray-600 dark:placeholder-gray-400 rounded-[12px] p-5 outline-none"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="mb-[30px] flex gap gap-6">
        <div>
          <div class="mb-2 mt-6 ">
            <span>Password</span>
          </div>
          <div class="flex-1">
            <input
              type="text"
              class="w-[320px] h-[42px] border border-gray-500 dark:border-black bg-white dark:bg-gray-800 dark:text-white text-black placeholder-gray-600 dark:placeholder-gray-400 rounded-[12px] p-5 outline-none"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
            <div class="mb-2 mt-6 ">
              <span>Confirm Password</span>
            </div>
            <div class="flex-1">
              <input
                type="text"
                class="w-[320px] h-[42px] border border-gray-500 dark:border-black bg-white dark:bg-gray-800 dark:text-white text-black placeholder-gray-600 dark:placeholder-gray-400 rounded-[12px] p-5 outline-none"
                placeholder="Confirm Password"
              />
            </div>
        </div>
      </div>
      <div>
        <div class="flex place-content-center">
          <button class="w-[320px] bg-white border border-gray-500 dark:border-black text-black text-[14px] font-inter rounded-lg py-3 mt-4 hover:bg-[#2831bc] hover:text-white transition duration-300">
            <span>SignUp</span>
          </button>
        </div>
        <div class="flex place-content-center">
          <button class="w-[320px]  bg-white border border-gray-500 dark:border-black text-black text-[14px] font-inter rounded-lg py-3 mt-4 hover:bg-[#2831bc] hover:text-white transition duration-300">
            <div class="flex place-items-center justify-center gap gap-3">
              <div>
                <img src="../assets/images/outlook.svg" width="28px" height="28px" alt="Outlook">
              </div>
              <div>
                <span>Sign in with Outlook</span>
              </div>
            </div>
          </button>
        </div>
      </div>               
      <div class="mt-2 flex place-content-center gap gap-1">
        <span>Already have an account?</span>
        <div class=" text-[#e7a93c] hover:text-[#0ee2b7] duration-300"><NuxtLink to="/signin">SignIn</NuxtLink></div>
      </div>
    </div>
  </div>
  <div class="absolute flex top-10 end-10 ">
      <DarktoLight />
  </div>
  <div class="absolute flex top-10 start-10">
    <NuxtLink to="/"><Back /></NuxtLink>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true 
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false; 
    }, 2000); 
  }
};
</script>