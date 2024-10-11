import React from 'react'
import Image from 'next/image';

export default function AboutAchievements() {
  return (
    <>
      <div className="container mx-auto px-5 py-12">
      
      {/* Row 1: Two Columns (Same Size) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className=" p-6">
          <h3 className="text-5xl font-bold mb-4 w-1/2">Achievements &
          Awards</h3>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">
        <div className="flex justify-center">
          <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
             <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
                 <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
          </div>
          <p className="mt-4">Featured on Cyber News, Medium, Pro News Report.</p>

        </div>
      </div>

      {/* Row 2: Three Columns (Images, Same Size) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-100 rounded-xl p-6 text-center">
            <div className="flex justify-center">
          <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
             <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
          </div>
          
          <p className="mt-4">Top Web Design & Development Company According to Clutch & Goodfirms</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">
        <div className="flex justify-center">
          <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
             <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
          </div>
          <p className="mt-4">Top Digital Marketing Agency According to Designrush & Mea Markets

</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">
        <div className="flex justify-center">
          <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
             <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
          </div>
          <p className="mt-4">Microsoft Certification</p>
        </div>
      </div>

      {/* Row 3: Three Columns (Images, 1st & 3rd Same, Middle Smaller) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* First Column (Same width as Third) */}
  <div className="col-span-1 bg-gray-100 rounded-xl p-6 text-center">
  <div className="flex justify-center">
          <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
             <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
          </div>
    <p className="mt-4">Endorsed by Microsoft Certificates for
    Outstanding Proficiency</p>
  </div>

  {/* Middle Column (Smaller) */}
  <div className="col-span-1 md:col-span-1 bg-gray-100 rounded-xl p-6 text-center">
  <div className="flex justify-center">
          <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
             <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
          </div>
    <p className="mt-4">Featured On Business
    of Apps</p>
  </div>

  {/* Third Column (Same width as First) */}
  <div className="col-span-1 bg-gray-100 rounded-xl p-6 text-center">
  <div className="flex justify-center">
          <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
             <Image 
            src="/Images/uaebusinessnew.png" 
            alt="Digital Marketing Award" 
            width={200} 
            height={150} 
          />
          </div>
    <p className="mt-4">Proud Partner of industry-leading
    technology providers</p>
  </div>
</div>

    </div>
    
    </>
  )
}
