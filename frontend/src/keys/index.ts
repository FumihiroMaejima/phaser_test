import { InjectionKey, Ref } from 'vue'

export const CircleLoadingKey: InjectionKey<Ref<boolean>> =
  Symbol('circleLoading')
export const LinerLoadingKey: InjectionKey<Ref<boolean>> =
  Symbol('linerLoading')
