import { getPost } from "@/lib/getPost";
import { CldImage } from "next-cloudinary";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button";
import { CloudImage } from "@/components/CloudImage/cloud-image";
import { PostComments } from "@/components/ui/post-comments";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

interface Comment{
    content: String,
    id: Number,
    postId: Number
}

export default async function PostDetails( { params }: { params: {postId: string}}){

    const postId = parseInt(params?.postId);
    
    const postData = await getPost(postId);

    return (
        <>
        <div className="relative h-screen w-full text-black bg-gray-100  no-scrollbar">
                <div className="fixed top-0 w-screen bg-gray-100 z-50">
                    <Navbar/>
                </div>

                <div className="hidden lg:block fixed left-0 top-0 h-screen bg-gray-100 z-40 pt-16 border-r border-gray-200">
                    <div className="w-64 p-4">
                    <Sidebar />
                    </div>
                </div>

                    <div className=" h-full overflow-y-auto">
                    <div className="flex flex-wrap px-4 pt-0 pb-8">
                        
                        <main className="w-full flex justify-center items-center  bg-gray-100">
                            <div className="flex flex-col space-y-4 sm:w-1/2 mx-5 bg-white text-gray-800 shadow-md p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <h2 className="text-xl font-semibold">{postData?.title}</h2>
                                <span className="px-4 py-1 ml-auto text-white bg-black rounded-2xl text-sm">{postData?.category}</span>
                                <p className='font-normal text-xs ml-3'>1/1/2011</p>
                            </div>
                                <p className="mb-4">{postData?.content}</p>
                                {
                                    postData?.imageUrl ? (
                                        <CloudImage
                                        src={postData?.imageUrl}
                                        alt="image"
                                        />
                                    ) : (
                                        null
                                    )
                                }
                                <PostComments postId={postId} />
                                <section className="rounded-md mt-5">
                                <h1 className="text-center text-xl font-semibold py-2">Comments</h1>
                                <div className="overflow-y-scroll no-scrollbar h-28 ">
                                    
                                    {postData?.comments.map((comment: Comment, idx) => (
                                    <div key={idx} className="border border-gray-150 p-1 mb-2 flex justify-between">
                                        <div>
                                        <p className="pl-2">{comment?.content}</p>
                                        </div>
                                        <div className="flex items-center">
                                        <p className="font-normal text-xs">20/4/2022</p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                </section>
                            </div>       
                        </main>
                        
                    </div>
                    </div>
                </div>

        
        </>
    )
}