<template>
  <div class="flex h-screen">
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
          2022/4~2023/1:Poor man(different contract from posting,so I have to avoid that company;got fucked by <a
            class="border-b"
            href="https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E5%A5%91%E7%B4%84">
            SES company</a>)
        </p>
        <p class="text text-center description">
          2023/1~:Web Developer,trying to be Frontend Developer
        </p>
      </div>
    </div>
    <div class="flex-1 items-center justify-center mx-2">
      <div>
        <p class="text text-4xl text-center">My Favorite Things</p>
        <DropdownDescription :title="'beatmania IIDX'" :description="'iidx'" />
        <p class="text text-center description">beatmania IIDX</p>
        <p class="text text-center description">英傑大戦</p>
        <p class="text text-center description">Baba is You</p>
        <p class="text text-center description">Symphony of War</p>
        <p class="text text-center description">OPUS</p>
        <p class="text text-center description">a</p>
        <p class="text text-center description">b</p>
      </div>
    </div>
  </div>
</template>