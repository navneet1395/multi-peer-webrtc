export default function WelcomeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left text-xl text-white"> Create a Room or join the Room by entering name and roomId </div>
            <div className="flex gap-4 justify-start mt-4">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
