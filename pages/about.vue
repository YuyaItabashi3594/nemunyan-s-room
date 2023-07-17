<template>
  <div class="flex min-h-screen">
    <div class="flex-1 items-center justify-center mx-2">
      <div>
        <p class="text text-4xl text-center">Profile</p>
        <p class="text text-center description">
          Birthday:1996/11/4
        </p>
        <p class="text text-center description">
          Tohoku University of Economics and Management Master Degree
        </p>
        <p class="text text-center description">
          Job:Web Developer
        </p>
      </div>
      <div>
        <p class="text text-4xl text-center mt-10">History</p>
        <p class="text text-center description">
          2015/4~2019/3:Tohoku University of Economics and Management Bachelor Degree
        </p>
        <p class="text text-center description">
          2019/4~2022/3:Tohoku University of Economics and Management Master Degree
        </p>
        <p class="text text-center description">
          2023/1~:Web Developer,trying to be Frontend Developer
        </p>
      </div>
    </div>
    <div class="flex-1 items-center justify-center mx-2 h-auto">
      <div>
        <p class="text text-4xl text-center">My Favorite Things</p>
        <DropdownDescription :title="'beatmania IIDX'" :description="'iidx'" />
        <p class="text text-center description">英傑大戦</p>
        <p class="text text-center description">Baba is You</p>
        <p class="text text-center description">Symphony of War</p>
        <p class="text text-center description">OPUS</p>
      </div>
    </div>
  </div>
</template>