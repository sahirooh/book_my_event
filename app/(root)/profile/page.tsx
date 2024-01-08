import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild className="button hidden sm:flex">
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={events?.data}
          emptyTitle="No event ticktes purchased yet"
          emptyStateSubtext="No worries - plenty of events to choose from!"
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        />
      </section>
    </>
  );
};

export default ProfilePage;
