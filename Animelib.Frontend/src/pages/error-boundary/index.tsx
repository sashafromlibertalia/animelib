import { Suspense, PropsWithChildren, Component } from "react";
import { Spinner } from "@fluentui/react-components";

interface IState {
  hasError: boolean
}

class ErrorBoundary extends Component<PropsWithChildren, IState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback={<Spinner />}>
          При загрузке страницы произошла ошибка.
        </Suspense>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
