import { useSyncExternalStore } from 'react'

export type GlobalStore<T> = {
  subscribe: (listener: GlobalStoreListener) => () => void
  get: () => T
  set: (value: T) => void
}

export type GlobalStoreListener = () => void

export function createGlobalState<T>(initialRef: T): GlobalStore<T> {
  let currentRef: T = initialRef
  const listeners: GlobalStoreListener[] = []

  return {
    subscribe(listener) {
      listeners.push(listener)

      return () => {
        const index = listeners.indexOf(listener)
        if (index === -1) return
        listeners.splice(index, 1)
      }
    },
    get: () => currentRef,
    set: (value) => {
      currentRef = value

      for (const listener of listeners) {
        listener()
      }
    },
  }
}

export type GlobalReactStore<T> = [T, (value: T) => void]

export function useGlobalState<T>(store: GlobalStore<T>): GlobalReactStore<T> {
  const { get, set, subscribe } = store
  const externalStore = useSyncExternalStore(subscribe, get)
  return [externalStore, set]
}
