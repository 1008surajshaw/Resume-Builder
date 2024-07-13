import React from 'react';

const Template8 = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Rick Grimes</h1>
        <p className="text-xl">Junior Editorial Assistant</p>
        <p className="mt-2">MA Student in English at Stanford University, made the Dean’s List for three consecutive years (2014-2016), with two study abroad experiences and a semester-long research internship in Oxford. Utilizing my strong research and writing skills, as well as my expertise in contemporary literature in the position of Editorial Assistant at Penguin Random House.</p>
      </header>

      <div className="grid grid-cols-3 gap-8">
        <aside className="col-span-1">
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2">Personal Info</h2>
            <ul className="mt-4">
              <li><strong>Address:</strong> 7 W. Adams Lane, Stanford, CA 94116</li>
              <li><strong>Phone:</strong> 220-555-0115</li>
              <li><strong>Email:</strong> richard.l.grimes@gmail.com</li>
              <li><strong>LinkedIn:</strong> linkedin.com/in/rickgrimes93</li>
              <li><strong>Twitter:</strong> twitter.com/ricklyrickgrimes</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2">Skills</h2>
            <ul className="mt-4">
              <li><strong>Academic Writing:</strong> Excellent</li>
              <li><strong>Literary Criticism:</strong> Excellent</li>
              <li><strong>Research:</strong> Advanced</li>
              <li><strong>Creative Writing:</strong> Advanced</li>
              <li><strong>Editing:</strong> Intermediate</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2">Languages</h2>
            <ul className="mt-4">
              <li><strong>Russian:</strong> Bilingual</li>
              <li><strong>French:</strong> Advanced</li>
              <li><strong>Spanish:</strong> Intermediate</li>
              <li><strong>Portuguese:</strong> Intermediate</li>
            </ul>
          </section>
        </aside>

        <main className="col-span-2">
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2">Work Experience</h2>
            <div className="mt-4">
              <h3 className="font-semibold">Editorial Intern</h3>
              <p>Faber and Faber, Stanford | 2015-06 - 2017-09</p>
              <ul className="list-disc list-inside mt-2">
                <li>Assisted in hiring and managing a pool of freelancers and technical editors.</li>
                <li>Assisted in the development, design, and preparation of sales materials.</li>
                <li>Collected and distributed incoming mail and processed outgoing mail.</li>
                <li>Served as the primary contact for incoming phone calls.</li>
                <li>Provided general and editorial support to the Stanford staff as requested.</li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2">Education</h2>
            <div className="mt-4">
              <h3 className="font-semibold">MA in English, Stanford University</h3>
              <p>Expected to graduate in 2018 | GPA: 3.95</p>
              <p><strong>Favorite fields of study:</strong> American Poetry: From Modernism to Postmodernism, Creative Expression in Writing, Creative Nonfiction</p>
              <p><strong>Thesis title:</strong> "An Analysis of the Impact of 1940s Blues Culture on the Poetic Expression of the Members of Harlem Renaissance"</p>
              <p><strong>Key achievement:</strong> Awarded $15,000 2017 Drue Heinz Literature Prize for a collection of short stories "Your Latest Trick"</p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">BA in Comparative Literature, Stanford University</h3>
              <p>2013-08 - 2017-06 | GPA: 3.9</p>
              <p><strong>Favorite fields of study:</strong> Introduction to Literary Study: Comparison, Cosmopolitanism, and the Global Novel, Literature Gone Viral, Digital Humanities, Radical Arts, Re-thinking Drama, Being as a Spectacle</p>
              <p><strong>Thesis title:</strong> "Towards the Derridian Deconstruction of the Notion 'Biography' on the lines of Julian Barnes’ 1984 novel 'Flaubert’s Parrot'"</p>
              <p><strong>Extracurricular activities and achievements:</strong> Dean’s List 2014-2016, President of the undergraduate student board from 2015 to 2016, Staff and an RA in classes on Russian Postmodernist Literature, Chief Editor of the University blog from 2015 to 2017</p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2">Awards and Honors</h2>
            <div className="mt-4">
              <p><strong>2017-02:</strong> 2016 Drue Heinz Literature Prize</p>
              <p><strong>2016-06:</strong> Dean’s List, Stanford University</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Template8;
