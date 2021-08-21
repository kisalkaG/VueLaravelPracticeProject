<template>
  <div class="container mt-3">
    <div>
      <h1>#Text</h1>
      <input v-model="message" />
      <p>message:{{ message }}</p>
    </div>

    <div>
      <h1>#Multiline Text</h1>
      <textarea v-model="text"></textarea>
      <p style="white-space: pre-line">Text:{{ text }}</p>
    </div>

    <div>
      <h1>#Checkbox</h1>
      <input
        type="checkbox"
        v-model="checked"
        true-value="yes"
        false-value="no"
      />
      <label>{{ checked }}</label>
    </div>

    <div>
      <h1>#Multiple Checkboxes</h1>
      <input type="checkbox" value="A" v-model="checkedValues" />
      <label>A</label>
      <input type="checkbox" value="B" v-model="checkedValues" />
      <label>B</label>
      <input type="checkbox" value="C" v-model="checkedValues" />
      <label>C</label>
      <input type="checkbox" value="D" v-model="checkedValues" />
      <label>D</label>
      <input type="checkbox" value="E" v-model="checkedValues" />
      <label>E</label>
      <br />
      <span>{{ checkedValues }}</span>
    </div>

    <div>
      <h1>#Radio</h1>
      <input type="radio" value="1" v-model="picked"  />
      <label>A</label>
      <input type="radio" value="2" v-model="picked" />
      <label>B</label>
      <br />
      <span>{{ picked }}</span>
    </div>

    <div>
      <h1>#Select</h1>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option :value="1">A</option>
        <option :value="2">B</option>
        <option :value="3">C</option>
        <option :value="4">D</option>
        <option :value="5">E</option>
      </select>
      <span>Selected:{{ selected }}</span>
    </div>

    <div>
      <h1>#Bind values</h1>
      <select v-model="selectedValue">
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <br />
      <span>selectedValue:{{ selectedValue }}</span>
    </div>

    <div>
        <h1>#BindClass</h1>
        <select v-model="valueOfObject">
             <option disabled value="">Please select one</option>
        <option :value="1">A</option>
        <option :value="2">B</option>
        <option :value="3">C</option>
        <option :value="4">D</option>
        <option :value="5">E</option>
        </select>
       
        <br>
        <span>value:{{valueOfObject}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      text: "",
      checked: false,
      checkedValues: [],
      picked: {},
      selected: "",

      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      selectedValue: "",
      valueOfObject: {}
    };
  },

  methods: {},
};
</script>
