import { GetServerSideProps } from "next";
import LogLayout from "../../../components/LogLayout";
import Logs from "../../interfaces/Logs";
import axios from "axios";

const Logs = ({ logs }: Logs) => {
  return (
    <LogLayout title="Logs">
      <div className="container m-auto flex flex-col items-center justify-center gap-12 px-4 py-16 pt-8">
        <table className="w-full">
          <thead className="sticky -top-[1px]">
            <tr className="">
              <th className="border bg-slate-400 border-slate-600">ID</th>
              <th className="border bg-slate-400 border-slate-600">Method</th>
              <th className="border bg-slate-400 border-slate-600">Route</th>
              <th className="border bg-slate-400 border-slate-600">Status</th>
              <th className="border bg-slate-400 border-slate-600">ResponseTime</th>
              <th className="border bg-slate-400 border-slate-600">CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr>
                <td className="text-center border border-slate-400">{log.id}</td>
                <td className="text-center border border-slate-400">{log.method}</td>
                <td className="text-center border border-slate-400">{log.route}</td>
                <td className="text-center border border-slate-400">{log.status}</td>
                <td className="text-center border border-slate-400">{log.responseTime}</td>
                <td className="text-center border border-slate-400">{JSON.stringify(log.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LogLayout>
  );
};

export default Logs;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const logs = await axios.get("/api/logs", {
    baseURL: process.env.HOST_URL,
    headers: {
      "accept-encoding": null,
      "Content-Type": "application/json",
    },
  });

  console.log(logs.data);

  return {
    props: {
      logs: logs.data,
    },
  };
};
