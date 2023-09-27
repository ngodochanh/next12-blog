import Image from "next/image";

function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="h-52 border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/profile.jpg"
        width={208}
        height={0}
        alt="Camel Case"
        priority={true}
      />
    </section>
  );
}

export default MyProfilePic;
