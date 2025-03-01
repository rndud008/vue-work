import { shallowMount } from "@vue/test-utils";
import LoginForm from "./LoginForm.vue";
import { expect } from "vitest";

// describe('LoginForm.vue', () => {
//   test('컴포넌트가 마운팅 되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
//     const instance = mount(LoginForm);
//     console.log(instance.vm);
//     // expect(instance).toBeTruthy();
//     expect(instance.vm.username).toBe("");
//   });
// });

describe("LoginForm.vue", () => {
  test("컴포넌트가 마운팅 되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.", () => {
    const wrapper = shallowMount(LoginForm);
    console.log(wrapper);
    // expect(instance).toBeTruthy();
    expect(wrapper.vm.username).toBe("");
  });
});

describe("LoginForm.vue", () => {
  test("ID는 이메일 형식이어야 한다.", () => {
    const wrapper = shallowMount(LoginForm,{
      data(){
        return{
          username: 'test'
        }
      }
    });
    const idInput = wrapper.find("#username");

    console.log(idInput.html());

    console.log('인풋 박스의 값 ',idInput.element.value)
    console.log(wrapper.vm.isUsernameValid);
  });
});

describe("LoginForm.vue", () => {
  test("ID는 이메일형식이 아니면 경고 메시지가 출력된다.", () => {
    const wrapper = shallowMount(LoginForm,{
      data(){
        return{
          username: 'test'
        }
      }
    });
    const warningtext = wrapper.find('.warning');

    console.log(warningtext.html())
    expect(warningtext.exists()).toBeTruthy()
  });

  test("ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다", () => {
    const wrapper = shallowMount(LoginForm,{
      data(){
        return{
          username: '',
          password: ''
        }
      }
    });
    const button = wrapper.find('button');

    // button.element.disabled
    expect(button.element.disabled).toBeTruthy();
  });
});

// import { sum } from "./math";

// sum(10, 20);

// describe("math.js", () => {
//   test("10 + 20 = 30", () => {
//     const reuslt = sum(10, 20);
//     // reuslt === 30;
//     expect(reuslt).toBe(30);
//   });
// });

// describe("math.js", () => {
//   test("10 + 20 = 30", () => {
//     const reuslt = sum(10, 20);
//     // reuslt === 30;
//     expect(reuslt).not.toBe(15);
//   });
// });
