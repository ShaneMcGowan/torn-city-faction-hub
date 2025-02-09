import { useGetBasic } from '../api/basic/queries/useBasic'
import { useUser } from '../hooks/useUser';

const PageBasic = () => {

  const { user } = useUser();

  const getBasic = useGetBasic({ user });

  console.log(getBasic.error);

  if (getBasic.isPending) {
    return (<>Loading...</>)
  }

  if (getBasic.isError) {
    return (<>Error</>)
  }

  return (
    <>
      <p>{getBasic.data.basic.name} [{getBasic.data.basic.tag}]</p>
      <p>Ran by [{getBasic.data.basic.leader_id}]</p>
    </>
  )
}

export default PageBasic