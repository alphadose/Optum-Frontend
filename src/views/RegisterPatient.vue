<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <!-- Page Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Patient Registration</span>
        <h3 class="page-title">Register New Patient</h3>
      </d-col>
    </d-row>

    <d-row>
        <d-col md="8">
        <d-card class="card-small">
            <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h6 class="m-0">Form</h6>
            </d-card-header>

            <d-list-group flush>
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                      <d-form-row>
                        <d-col md="4" class="form-group">
                          <label for="feEmailAddress">First Name</label>
                          <d-input id="feEmailAddress" type="email" placeholder="First Name" value="Harsh"/>
                        </d-col>
                        <d-col md="4" class="form-group">
                          <label for="feEmailAddress">Last Name</label>
                          <d-input id="feEmailAddress" type="email" placeholder="Last Name" value="Dabaria"/>
                        </d-col>
                        <d-col md="4" class="form-group">
                          <label for="feRecordID">Record ID</label>
                          <d-input id="feRecordID" type="email" placeholder="Record ID" value="134585"/>
                        </d-col>
                      </d-form-row>

                    <d-form-row>
                      <d-col md="8"  class="form-group">
                        <label for="feInputAddress">Address</label>
                        <d-input id="feInputAddress" placeholder="1234 Main St" value="Jawahar Bhawan, IIT Roorkee"/>
                      </d-col>
                      <d-col md="4"  class="form-group">
                        <label for="feInputAddress">City</label>
                        <d-input id="feInputAddress" placeholder="City" value="Roorkee"/>
                      </d-col>
                    </d-form-row>

                      <d-form-row>
                        <d-col md="2" class="form-group">
                          <label for="feInputZip">Height (cm)</label>
                          <d-input id="feInputZip" value="191"/>
                        </d-col>
                        <d-col md="2" class="form-group">
                          <label for="feInputZip">Weight (kg)</label>
                          <d-input id="feInputZip" value="86"/>
                        </d-col>
                        <d-col md="2" class="form-group">
                          <label for="feInputZip">Age</label>
                          <d-input id="feInputZip" value="20"/>
                        </d-col>
                        <d-col md="2" class="form-group">
                          <label for="feInputState">Gender</label>
                          <d-select id="feInputState" value="Male">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </d-select>
                        </d-col>
                        <d-col md="4" class="form-group">
                          <label for="feInputState">ICU Type</label>
                          <d-select id="feInputState" value="Cardiac Surgery Recovery Unit">
                            <option>Coronary Care Unit</option>
                            <option>Cardiac Surgery Recovery Unit</option>
                            <option>Medical ICU</option>
                            <option>Surgical ICU</option>
                          </d-select>
                        </d-col>
                      </d-form-row>
                      <d-button @click="showAlert">Register</d-button>
                    </d-form>
                  </d-col>
                </d-row>
              </d-list-group-item>
            </d-list-group>

        </d-card>
        </d-col>
        <d-col md="4">
          <d-card class="card-small">
            <!-- Files & Dropdowns -->
            <d-card-header class="border-bottom">
              <h6 class="m-0">Upload Time Series Data</h6>
            </d-card-header>

            <d-list-group flush>
              <d-list-group-item class="px-3">
                <d-form>
                <strong class="text-muted d-block mb-2">Record ID</strong>
                  <d-input id="feRecordID" placeholder="Record ID" value="134585"/>
                <br>
                  <!-- Custom File Upload -->
                  <strong class="text-muted d-block mb-2">File Upload</strong>
                  <div class="custom-file mb-3">
                    <input type="file" class="custom-file-input" id="customFile2" />
                    <label class="custom-file-label" for="customFile2">Choose CSV file...</label>
                  </div>
                    <d-button type="submit" @click="showUpload">Upload</d-button>
                </d-form>
              </d-list-group-item>
            </d-list-group>
          </d-card>
        </d-col>
    </d-row>
  </d-container>
</template>

<script>
import SidebarActions from '@/components/add-new-post/SidebarActions.vue';
import SidebarCategories from '@/components/add-new-post/SidebarCategories.vue';
import Editor from '@/components/add-new-post/Editor.vue';

import 'quill/dist/quill.snow.css';

export default {
  methods: {
    showAlert(e) {
      e.preventDefault();
      // Use sweetalert2
      this.$swal('Success', 'Patient Successfully Registered', 'success');
    },
    showUpload(e) {
      e.preventDefault();
      // Use sweetalert2
      this.$swal('Success', 'Data Successfully Uploaded', 'success');
    },
  },
  components: {
    anpEditor: Editor,
    anpSidebarActions: SidebarActions,
    anpSidebarCategories: SidebarCategories,
  },
};
</script>
