import React, { useState } from "react"
import { AppState } from "./AppStateContext"
import { load } from "./api"

type InjectedProps = {
  initialState: AppState
}

export function withInitialState<TProps>(
  WrappedComponent: React.ComponentType<
    TProps & InjectedProps
  >
) {
  return (props: Omit<TProps, keyof InjectedProps>) => {
    const [initialState, setInitialState] = useState<AppState>({
      lists: [],
      draggedItem: undefined
    })
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | undefined>()

    React.useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const data = await load()
          setInitialState(data)
        } catch (e) {
          setError(e)
        }
        setIsLoading(false)
      }
      fetchInitialState()
    }, [])

    if (isLoading) {
      return <div>Loading</div>
    }

    if (error) {
      return <div>{error.message}</div>
    }

    return (
      <WrappedComponent
        {...(props as TProps)}
        initialState={initialState}
      />
    )
  }
}
