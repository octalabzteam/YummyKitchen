<template>
  <div class="flex flex-col justify-center items-center h-screen p-2">
    <div class="w-full md:w-3/4 lg:w-3/5 xl:w-1/2">
        <div class="flex py-6 p-3 justify-around">
            <div class="w-3/5 flex flex-col space-y-1">
                <label for="Quantity">Number of Person</label>
                <input type="number" id="Quantity" v-model="varPerson" min="1" max="10" class="border-2 border-yellow-600 w-3/4 pl-1">
            </div>
            <div>{{varDate}} | {{varPerson}} | {{varTime}}</div>
        </div> 
        <vue-meeting-selector
        class="simple-example__meeting-selector"
        v-model="meeting"
        :date="date"
        :loading="loading"
        :class-names="classNames"
        :meetings-days="meetingsDays"
        @next-date="nextDate"
        @previous-date="previousDate"
        />
        <p class="text-center">meeting Selected: {{ meeting ? meeting : "No Meeting selected" }}</p>
    </div>
  </div>
</template>

<script>
import VueMeetingSelector from "vue-meeting-selector";
import data from "./data.json";

export default {
  name: "ReservationMeeting",
  components: {
    VueMeetingSelector,
  },
  data() {
    return {
      date: new Date(),
      meetingsDays: [],
      meeting: { date: "2021-01-15T08:00:00.000Z" },
      loading: true,
      nbDaysToDisplay: 7,
      varDate: "1 Jun 2022",
      varPerson: 2,
      varTime: "17:00",
    };
  },
  methods: {
    // @click on button-right
    async nextDate() {
      console.log("nextDate");
    },
    // @click on button-left
    async previousDate() {
      console.log("previousDate");
    },
  },
  async created() {
    this.meetingsDays = data;
    this.loading = false;
  },
};
</script>

<style>

.meeting__button[data-v-4869c393] {
    background-color: #d3aa5285;
}
.meeting__button--selected[data-v-4869c393], .meeting__button[data-v-4869c393]:hover {
    background-color: #d1a340;
}
</style>

<!--https://codesandbox.io/s/l0s5p?file=/src/App.vue:504-1055