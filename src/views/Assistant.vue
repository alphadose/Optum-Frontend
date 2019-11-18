<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Your AI Assistant</span>
        <h3 class="page-title">Suggestion Forum</h3>
      </d-col>
    </d-row>

    <!-- Small Stats Blocks -->
    <d-row>
      <d-col lg v-for="(stats, idx) in smallStats" :key="idx" class="mb-4">
        <small-stats :id="`small-stats-${idx}`" variation="1" :chart-data="stats.datasets" :label="stats.label" :value="stats.value" :percentage="stats.percentage" :increase="stats.increase" :decrease="stats.decrease" />
      </d-col>
    </d-row>

    <d-row>
      <!-- Discussions -->
      <d-col lg="9" md="12" sm="12" class="mb-4">
        <bo-discussions @approve="handleApprove" @reject="handleReject" @edit="handleEdit" @view-all-comments="handleViewAllComments" />
      </d-col>

      <!-- Top Referrals -->
      <d-col lg="3" md="12" sm="12" class="mb-4">
        <bo-top-referrals />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import SmallStats from '@/components/common/AssistantStats.vue';
import TopReferrals from '@/components/common/TopReferrals.vue';
import UsersOverview from '@/components/blog/UsersOverview.vue';
import UsersByDevice from '@/components/blog/UsersByDeviceLite.vue';
import NewDraft from '@/components/blog/NewDraft.vue';
import Discussions from '@/components/blog/Discussions.vue';

export default {
  components: {
    SmallStats,
    boUsersOverview: UsersOverview,
    boUsersByDevice: UsersByDevice,
    boNewDraft: NewDraft,
    boDiscussions: Discussions,
    boTopReferrals: TopReferrals,
  },
  data() {
    return {
      dateRange: {
        from: null,
        to: null,
      },
    };
  },
  methods: {
    handleApprove(id) {
      this.$swal('Success', `Approved Suggestion ${id}`, 'success');
    },
    handleReject(id) {
      this.$swal('Success', `Rejected Suggestion ${id}`, 'error');
    },
    handleEdit(id) {
      alert(`Editing discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleViewAllComments() {
      alert('Viewing all comments!'); // eslint-disable-line no-alert
    },
  },
  computed: {
    smallStats() {
      return [{
        label: 'Prediction for Harsh',
        value: 'Death',
        percentage: '1',
        increase: false,
        // labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        // datasets: [{
        //   label: 'Today',
        //   fill: 'start',
        //   borderWidth: 1.5,
        //   backgroundColor: 'rgba(0, 184, 216, 0.1)',
        //   borderColor: 'rgb(0, 184, 216)',
        //   data: [1, 2, 1, 3, 5, 4, 7],
        // }],
      }, {
        label: 'Confidence Score',
        value: '0.62',
        percentage: '0.03',
        increase: true,
        labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(23,198,113,0.1)',
          borderColor: 'rgb(23,198,113)',
          data: [1, 2, 3, 3, 3, 4, 4],
        }],
      }, {
        label: 'Suggestions',
        value: '3',
        percentage: '50%',
        increase: true,
        decrease: true,
        labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(255,180,0,0.1)',
          borderColor: 'rgb(255,180,0)',
          data: [2, 3, 3, 3, 4, 3, 3],
        }],
      }, {
        label: 'Patients',
        value: '2',
        percentage: '75%',
        increase: false,
        decrease: true,
        labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(255,65,105,0.1)',
          borderColor: 'rgb(255,65,105)',
          data: [1, 7, 1, 3, 1, 4, 8],
        }],
      }, {
        label: 'Users',
        value: '2',
        percentage: '100%',
        increase: true,
        decrease: true,
        labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgb(0,123,255,0.1)',
          borderColor: 'rgb(0,123,255)',
          data: [3, 2, 3, 2, 4, 5, 4],
        }],
      }];
    },
  },
};
</script>

