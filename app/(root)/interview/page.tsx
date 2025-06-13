import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();
  console.log('VAPI WORKFLOW ID:', process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID);

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user?.name || "Guest"}
        userId={user?.id}
        profileImage={user?.profileURL || ""}
        type="generate"
      />
    </>
  );
};

export default Page;
