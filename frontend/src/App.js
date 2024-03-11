import AppRoutes from "./AppRoutes";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";
import { useLoading } from './Hooks/UseLoading';
import { setLoadingInterceptor } from './Interceptors/LoadingInterceptor';
import { useEffect } from 'react';



function App() {

  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, []);


  return (
    <>
    <Loading/>
   <Header/>

   <AppRoutes/>
   </>
  );
}

export default App;
