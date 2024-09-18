
import cover from '../../assets/cover/unsplash__uPh7lbSm4Y.png'
import cover1 from '../../assets/cover/pngegg 1.png'
import main from '../../assets/section/main.png';
import main1 from '../../assets/section/image (1).png';
import main2 from '../../assets/section/image (2).png';
import main3 from '../../assets/section/image.png';
import LatestCard from './LatestCard';
const Latest = () => {
    const data=[
        {
            id:1,
            des:"Lorem ipsum dolor dolor sit amet, consectetur adipiscing",
            image:main1
        },
        {
            id:2,
            des:"Dolor sit amet, consectetur adipiscing massa donec sit",
            image:main2
        },
        {
            id:3,
            des:"Lorem ipsum dolor sit amet. dolor sit amet, consectetur ",
            image:main3
        }
    ]
    return (
        <div>
      <h3 className="text-[rgb(141,63,56)] mt-4 font-bold text-3xl text-center ">Travel. It’s the best investment <br /> you can make.</h3>

      <section className='mt-28  mb-20 relative'>
  <img className='-mb-12' src={cover} alt="" />

  <div className='absolute' style={{ right: '100px', bottom: '0px' }}>
    <img className='h-[550px] mb-0' src={cover1} alt="" />
  </div>
</section>


      <section className='flex mt-10 flex-col md:flex-row'>
    <div >
     <div className='relative'>
     <img src={main} alt="" />
     {/* <h2 className='absolute mt-2'>Latest Blog</h2> */}
     </div>
  <div className='m-3 p-2'>
  <h2 className='text-3xl'>Solo Road trip to Paris </h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Cum in vel massa donec sit. </p>
  </div>
    </div> 
   
    <div className='ml-6' >
        <h2 className='text-2xl font-bold'>Recent Blogs</h2>

        {
            data.map(data=><LatestCard key={data.id} data={data}></LatestCard>)
        }
    </div>
      </section>
        </div>
    );
};

export default Latest;