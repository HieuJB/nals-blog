import { MutationTree } from 'vuex'

interface StateProps {
  isLoading: Boolean
}

export const state = (): StateProps => ({
  isLoading: false,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_PAGE_LOADING(_state, value: boolean) {
    _state.isLoading = value
  },
}
