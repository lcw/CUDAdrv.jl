var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#CUDAdrv.jl-1",
    "page": "Home",
    "title": "CUDAdrv.jl",
    "category": "section",
    "text": "A Julia wrapper for the CUDA toolkit.This package aims to provide high-level wrappers for the functionality exposed by the CUDA driver API, and is meant for users who need high- or low-level access to the CUDA toolkit or the underlying GPU.The package is built upon the low-level CUDA driver API, but that shouldn't make the Julia wrapper any harder to use. That said, it is a work-in-progress and does not offer the same functionality or convenience as the more popular CUDArt package, which is built upon the higher-level CUDA runtime API."
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "At the Julia REPL:Pkg.add(\"CUDAdrv\")"
},

{
    "location": "api.html#",
    "page": "Driver API functionality",
    "title": "Driver API functionality",
    "category": "page",
    "text": ""
},

{
    "location": "api.html#Driver-API-functionality-1",
    "page": "Driver API functionality",
    "title": "Driver API functionality",
    "category": "section",
    "text": "This section lists the package's public functionality that directly corresponds to functionality of the CUDA driver API. The documentation is grouped according to the modules of the driver API."
},

{
    "location": "api.html#CUDAdrv.vendor",
    "page": "Driver API functionality",
    "title": "CUDAdrv.vendor",
    "category": "Function",
    "text": "Returns a string identifying the vendor of your CUDA driver.\n\n\n\n"
},

{
    "location": "api.html#Installation-properties-1",
    "page": "Driver API functionality",
    "title": "Installation properties",
    "category": "section",
    "text": "CUDAdrv.vendor"
},

{
    "location": "api.html#CUDAdrv.init",
    "page": "Driver API functionality",
    "title": "CUDAdrv.init",
    "category": "Function",
    "text": "Initialize the CUDA driver API.\n\nThis function is automatically called upon loading the package. You should not have to call this manually.\n\n\n\n"
},

{
    "location": "api.html#Initialization-1",
    "page": "Driver API functionality",
    "title": "Initialization",
    "category": "section",
    "text": "CUDAdrv.init"
},

{
    "location": "api.html#CUDAdrv.CuError",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuError",
    "category": "Type",
    "text": "CuError(code::Integer)\nCuError(code::Integer, info::String)\n\nCreate a CUDA error object with error code code. The optional info parameter indicates whether extra information, such as error logs, is known.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.name-Tuple{CUDAdrv.CuError}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.name",
    "category": "Method",
    "text": "name(err::CuError)\n\nGets the string representation of an error code.\n\nThis name can often be used as a symbol in source code to get an instance of this error.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.description-Tuple{CUDAdrv.CuError}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.description",
    "category": "Method",
    "text": "description(err::CuError)\n\nGets the string description of an error code.\n\n\n\n"
},

{
    "location": "api.html#Error-Handling-1",
    "page": "Driver API functionality",
    "title": "Error Handling",
    "category": "section",
    "text": "CUDAdrv.CuError\nCUDAdrv.name(::CuError)\nCUDAdrv.description(::CuError)"
},

{
    "location": "api.html#CUDAdrv.version-Tuple{}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.version",
    "category": "Method",
    "text": "version()\n\nReturns the CUDA version as reported by the driver.\n\n\n\n"
},

{
    "location": "api.html#Version-Management-1",
    "page": "Driver API functionality",
    "title": "Version Management",
    "category": "section",
    "text": "CUDAdrv.version()"
},

{
    "location": "api.html#CUDAdrv.CuDevice",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuDevice",
    "category": "Type",
    "text": "CuDevice(i::Integer)\n\nGet a handle to a compute device.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.devices",
    "page": "Driver API functionality",
    "title": "CUDAdrv.devices",
    "category": "Function",
    "text": "devices()\n\nGet an iterator for the compute devices.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.name-Tuple{CUDAdrv.CuDevice}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.name",
    "category": "Method",
    "text": "name(dev::CuDevice)\n\nReturns an identifier string for the device.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.totalmem-Tuple{CUDAdrv.CuDevice}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.totalmem",
    "category": "Method",
    "text": "totalmem(dev::CuDevice)\n\nReturns the total amount of memory (in bytes) on the device.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.attribute",
    "page": "Driver API functionality",
    "title": "CUDAdrv.attribute",
    "category": "Function",
    "text": "attribute(dev::CuDevice, code)\n\nReturns information about the device.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.capability-Tuple{CUDAdrv.CuDevice}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.capability",
    "category": "Method",
    "text": "capability(dev::CuDevice)\n\nReturns the compute capability of the device.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.warpsize-Tuple{CUDAdrv.CuDevice}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.warpsize",
    "category": "Method",
    "text": "warpsize(dev::CuDevice)\n\nReturns the warp size (in threads) of the device.\n\n\n\n"
},

{
    "location": "api.html#Device-Management-1",
    "page": "Driver API functionality",
    "title": "Device Management",
    "category": "section",
    "text": "CUDAdrv.CuDevice\nCUDAdrv.devices\nCUDAdrv.name(::CuDevice)\nCUDAdrv.totalmem(::CuDevice)\nCUDAdrv.attributeCertain common attributes are exposed by additional convenience functions:CUDAdrv.capability(::CuDevice)\nCUDAdrv.warpsize(::CuDevice)"
},

{
    "location": "api.html#CUDAdrv.CuContext",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuContext",
    "category": "Type",
    "text": "CuContext(dev::CuDevice, flags::CUctx_flags=SCHED_AUTO)\nCuContext(f::Function, ...)\n\nCreate a CUDA context for device. A context on the GPU is analogous to a process on the CPU, with its own distinct address space and allocated resources. When a context is destroyed, the system cleans up the resources allocated to it.\n\nContexts are unique instances which need to be destroyed after use. For automatic management, prefer the do block syntax, which implicitly calls destroy.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.destroy!-Tuple{CUDAdrv.CuContext}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.destroy!",
    "category": "Method",
    "text": "destroy!(ctx::CuContext)\n\nMark a context for destruction.\n\nThis does not immediately destroy the context, as there might still be dependent resources which have not been collected yet. The context will get freed as soon as all outstanding instances have been finalized.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.CuCurrentContext",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuCurrentContext",
    "category": "Function",
    "text": "CuCurrentContext()\n\nReturn the current context, or a NULL context if there is no active context (see isnull).\n\n\n\n"
},

{
    "location": "api.html#Base.isnull-Tuple{CUDAdrv.CuContext}",
    "page": "Driver API functionality",
    "title": "Base.isnull",
    "category": "Method",
    "text": "isnull(ctx::CuContext)\n\nIndicates whether the current context is an invalid NULL context.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.activate-Tuple{CUDAdrv.CuContext}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.activate",
    "category": "Method",
    "text": "activate(ctx::CuContext)\n\nBinds the specified CUDA context to the calling CPU thread.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.synchronize-Tuple{CUDAdrv.CuContext}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.synchronize",
    "category": "Method",
    "text": "synchronize(ctx::CuContext=CuCurrentContext())\n\nBlock for a context's tasks to complete.\n\nThe ctx parameter defaults to the current active context.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.device-Tuple{CUDAdrv.CuContext}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.device",
    "category": "Method",
    "text": "device(ctx::Cucontext)\n\nReturns the device for the current context. The ctx parameter is to make sure that the current context is really active, and hence the returned device is valid.\n\n\n\n"
},

{
    "location": "api.html#Context-Management-1",
    "page": "Driver API functionality",
    "title": "Context Management",
    "category": "section",
    "text": "CUDAdrv.CuContext\nCUDAdrv.destroy!(::CuContext)\nCUDAdrv.CuCurrentContext\nCUDAdrv.isnull(::CuContext)\nCUDAdrv.activate(::CuContext)\nCUDAdrv.synchronize(::CuContext)\nCUDAdrv.device(::CuContext)"
},

{
    "location": "api.html#CUDAdrv.CuPrimaryContext",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuPrimaryContext",
    "category": "Type",
    "text": "CuPrimaryContext(dev::Int)\n\nCreate a primary CUDA context for a given device.\n\nEach primary context is unique per device and is shared with CUDA runtime API. It is meant for interoperability with (applications using) the runtime API.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.CuContext-Tuple{CUDAdrv.CuPrimaryContext}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuContext",
    "category": "Method",
    "text": "CuContext(pctx::CuPrimaryContext)\nCuContext(f::Function, pctx::CuPrimaryContext)\n\nRetain the primary context on the GPU, returning a context compatible with the driver API. The primary context will be released when the returned driver context is finalized. For that reason, it is advised to use this function with do block syntax.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.isactive-Tuple{CUDAdrv.CuPrimaryContext}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.isactive",
    "category": "Method",
    "text": "isactive(pctx::CuPrimaryContext)\n\nQuery whether a primary context is active.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.flags-Tuple{CUDAdrv.CuPrimaryContext}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.flags",
    "category": "Method",
    "text": "flags(pctx::CuPrimaryContext)\n\nQuery the flags of a primary context.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.setflags!-Tuple{CUDAdrv.CuPrimaryContext,CUDAdrv.CUctx_flags}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.setflags!",
    "category": "Method",
    "text": "setflags!(pctx::CuPrimaryContext)\n\nSet the flags of a primary context.\n\n\n\n"
},

{
    "location": "api.html#Primary-Context-Management-1",
    "page": "Driver API functionality",
    "title": "Primary Context Management",
    "category": "section",
    "text": "CUDAdrv.CuPrimaryContext\nCUDAdrv.CuContext(::CuPrimaryContext)\nCUDAdrv.isactive(::CuPrimaryContext)\nCUDAdrv.flags(::CuPrimaryContext)\nCUDAdrv.setflags!(::CuPrimaryContext, ::CUDAdrv.CUctx_flags)"
},

{
    "location": "api.html#CUDAdrv.CuModule",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuModule",
    "category": "Type",
    "text": "CuModule(data, options::Dict{CUjit_option,Any})\nCuModuleFile(path, options::Dict{CUjit_option,Any})\n\nCreate a CUDA module from a data, or a file containing data. The data may be PTX code, a CUBIN, or a FATBIN.\n\nThe options is an optional dictionary of JIT options and their respective value.\n\n\n\n"
},

{
    "location": "api.html#Module-Management-1",
    "page": "Driver API functionality",
    "title": "Module Management",
    "category": "section",
    "text": "CUDAdrv.CuModule"
},

{
    "location": "api.html#CUDAdrv.CuFunction",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuFunction",
    "category": "Type",
    "text": "CuFunction(mod::CuModule, name::String)\n\nAcquires a function handle from a named function in a module.\n\n\n\n"
},

{
    "location": "api.html#Function-Management-1",
    "page": "Driver API functionality",
    "title": "Function Management",
    "category": "section",
    "text": "CUDAdrv.CuFunction"
},

{
    "location": "api.html#CUDAdrv.CuGlobal",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuGlobal",
    "category": "Type",
    "text": "CuGlobal{T}(mod::CuModule, name::String)\n\nAcquires a typed global variable handle from a named global in a module.\n\n\n\n"
},

{
    "location": "api.html#Base.eltype-Union{Tuple{CUDAdrv.CuGlobal{T}}, Tuple{T}} where T",
    "page": "Driver API functionality",
    "title": "Base.eltype",
    "category": "Method",
    "text": "eltype(var::CuGlobal)\n\nReturn the element type of a global variable object.\n\n\n\n"
},

{
    "location": "api.html#Base.get-Union{Tuple{CUDAdrv.CuGlobal{T}}, Tuple{T}} where T",
    "page": "Driver API functionality",
    "title": "Base.get",
    "category": "Method",
    "text": "get(var::CuGlobal)\n\nReturn the current value of a global variable.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.set-Union{Tuple{CUDAdrv.CuGlobal{T},T}, Tuple{T}} where T",
    "page": "Driver API functionality",
    "title": "CUDAdrv.set",
    "category": "Method",
    "text": "set(var::CuGlobal{T}, T)\n\nSet the value of a global variable to val\n\n\n\n"
},

{
    "location": "api.html#Global-Variable-Management-1",
    "page": "Driver API functionality",
    "title": "Global Variable Management",
    "category": "section",
    "text": "CUDAdrv.CuGlobal\nCUDAdrv.eltype{T}(::CuGlobal{T})\nCUDAdrv.get{T}(::CuGlobal{T})\nCUDAdrv.set{T}(::CuGlobal{T}, ::T)"
},

{
    "location": "api.html#CUDAdrv.CuLink",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuLink",
    "category": "Type",
    "text": "CuLink()\n\nCreates a pending JIT linker invocation.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.addData",
    "page": "Driver API functionality",
    "title": "CUDAdrv.addData",
    "category": "Function",
    "text": "addData(link::CuLink, name::String, data, type::CUjit_input)\n\nAdd data to a link operation. The argument typ indicates the type of the data.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.addFile",
    "page": "Driver API functionality",
    "title": "CUDAdrv.addFile",
    "category": "Function",
    "text": "addFile(link::CuLink, path::String, typ::CUjit_input)\n\nAdd data from a file to a link operation. The argument typ indicates the type of the contained data.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.CuLinkImage",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuLinkImage",
    "category": "Type",
    "text": "The result of a linking operation.\n\nThis object keeps its parent linker object alive, as destroying a linker destroys linked images too.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.complete",
    "page": "Driver API functionality",
    "title": "CUDAdrv.complete",
    "category": "Function",
    "text": "complete(link::CuLink)\n\nComplete a pending linker invocation, returning an output image.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.CuModule-Tuple{CUDAdrv.CuLinkImage,Vararg{Any,N} where N}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuModule",
    "category": "Method",
    "text": "CuModule(img::CuLinkImage, ...)\nCuModule(f::Function, img::CuLinkImage, ...)\n\nCreate a CUDA module from a completed linking operation. Options from CuModule apply.\n\n\n\n"
},

{
    "location": "api.html#Linker-1",
    "page": "Driver API functionality",
    "title": "Linker",
    "category": "section",
    "text": "CUDAdrv.CuLink\nCUDAdrv.addData\nCUDAdrv.addFile\nCUDAdrv.CuLinkImage\nCUDAdrv.complete\nCUDAdrv.CuModule(::CUDAdrv.CuLinkImage, args...)"
},

{
    "location": "api.html#Memory-Management-1",
    "page": "Driver API functionality",
    "title": "Memory Management",
    "category": "section",
    "text": ""
},

{
    "location": "api.html#CUDAdrv.Mem.alloc-Tuple{Integer}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.Mem.alloc",
    "category": "Method",
    "text": "alloc(bytes::Integer)\n\nAllocates bytesize bytes of linear memory on the device and returns a pointer to the allocated memory. The allocated memory is suitably aligned for any kind of variable. The memory is not cleared, use free for that.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.Mem.free-Tuple{CUDAdrv.DevicePtr}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.Mem.free",
    "category": "Method",
    "text": "free(p::DevicePtr)\n\nFrees device memory.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.Mem.set-Tuple{CUDAdrv.DevicePtr,UInt32,Integer}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.Mem.set",
    "category": "Method",
    "text": "set(p::DevicePtr, value::Cuint, len::Integer)\n\nInitializes device memory, copying the value val for len times.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.Mem.upload-Tuple{CUDAdrv.DevicePtr,Ref,Integer}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.Mem.upload",
    "category": "Method",
    "text": "upload(dst::DevicePtr, src, nbytes::Integer)\n\nUpload nbytes memory from src at the host to dst on the device.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.Mem.download-Tuple{Ref,CUDAdrv.DevicePtr,Integer}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.Mem.download",
    "category": "Method",
    "text": "download(dst::DevicePtr, src, nbytes::Integer)\n\nDownload nbytes memory from src on the device to src on the host.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.Mem.transfer-Tuple{CUDAdrv.DevicePtr,CUDAdrv.DevicePtr,Integer}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.Mem.transfer",
    "category": "Method",
    "text": "download(dst::DevicePtr, src, nbytes::Integer)\n\nTransfer nbytes of device memory from src to dst.\n\n\n\n"
},

{
    "location": "api.html#Pointer-based-(low-level)-1",
    "page": "Driver API functionality",
    "title": "Pointer-based (low-level)",
    "category": "section",
    "text": "CUDAdrv.Mem.alloc(::Integer)\nCUDAdrv.Mem.free(::DevicePtr)\nCUDAdrv.Mem.set(::DevicePtr, ::Cuint, ::Integer)\nCUDAdrv.Mem.upload(::DevicePtr, ::Ref, ::Integer)\nCUDAdrv.Mem.download(::Ref, ::DevicePtr, ::Integer)\nCUDAdrv.Mem.transfer(::DevicePtr, ::DevicePtr, ::Integer)"
},

{
    "location": "api.html#CUDAdrv.Mem.alloc-Union{Tuple{Type{T},Integer}, Tuple{T}} where T",
    "page": "Driver API functionality",
    "title": "CUDAdrv.Mem.alloc",
    "category": "Method",
    "text": "alloc{T}(len=1)\n\nAllocates space for len objects of type T on the device and returns a pointer to the allocated memory. The memory is not cleared, use free for that.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.Mem.upload-Union{Tuple{CUDAdrv.DevicePtr{T},T}, Tuple{T}} where T",
    "page": "Driver API functionality",
    "title": "CUDAdrv.Mem.upload",
    "category": "Method",
    "text": "upload{T}(src::T)\nupload{T}(dst::DevicePtr{T}, src::T)\n\nUpload an object src from the host to the device. If a destination dst is not provided, new memory is allocated and uploaded to.\n\nNote this does only upload the object itself, and does not peek through it in order to get to the underlying data (like Ref does). Consequently, this functionality should not be used to transfer eg. arrays, use CuArray's copy! functionality for that.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.Mem.download-Union{Tuple{CUDAdrv.DevicePtr{T}}, Tuple{T}} where T",
    "page": "Driver API functionality",
    "title": "CUDAdrv.Mem.download",
    "category": "Method",
    "text": "download{T}(src::DevicePtr{T})\n\nDownload an object src from the device and return it as a host object.\n\nSee upload for notes on how arguments are processed.\n\n\n\n"
},

{
    "location": "api.html#Object-based-(high-level)-1",
    "page": "Driver API functionality",
    "title": "Object-based (high-level)",
    "category": "section",
    "text": "CUDAdrv.Mem.alloc{T}(::Type{T}, ::Integer)\nCUDAdrv.Mem.upload{T}(::DevicePtr{T}, ::T)\nCUDAdrv.Mem.download{T}(::DevicePtr{T})"
},

{
    "location": "api.html#CUDAdrv.CuStream",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuStream",
    "category": "Type",
    "text": "CuStream(flags=0)\n\nCreate a CUDA stream.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.CuDefaultStream",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuDefaultStream",
    "category": "Function",
    "text": "CuDefaultStream()\n\nReturn the default stream.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.synchronize-Tuple{CUDAdrv.CuStream}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.synchronize",
    "category": "Method",
    "text": "synchronize(s::CuStream)\n\nWait until a stream's tasks are completed.\n\n\n\n"
},

{
    "location": "api.html#Stream-Management-1",
    "page": "Driver API functionality",
    "title": "Stream Management",
    "category": "section",
    "text": "CUDAdrv.CuStream\nCUDAdrv.CuDefaultStream\nCUDAdrv.synchronize(::CuStream)"
},

{
    "location": "api.html#CUDAdrv.CuEvent",
    "page": "Driver API functionality",
    "title": "CUDAdrv.CuEvent",
    "category": "Type",
    "text": "CuEvent()\n\nCreate a new CUDA event.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.record",
    "page": "Driver API functionality",
    "title": "CUDAdrv.record",
    "category": "Function",
    "text": "record(e::CuEvent, stream=CuDefaultStream())\n\nRecord an event on a stream.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.synchronize-Tuple{CUDAdrv.CuEvent}",
    "page": "Driver API functionality",
    "title": "CUDAdrv.synchronize",
    "category": "Method",
    "text": "synchronize(e::CuEvent)\n\nWaits for an event to complete.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.elapsed",
    "page": "Driver API functionality",
    "title": "CUDAdrv.elapsed",
    "category": "Function",
    "text": "elapsed(start::CuEvent, stop::CuEvent)\n\nComputes the elapsed time between two events (in seconds).\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.@elapsed",
    "page": "Driver API functionality",
    "title": "CUDAdrv.@elapsed",
    "category": "Macro",
    "text": "@elapsed stream ex\n@elapsed ex\n\nA macro to evaluate an expression, discarding the resulting value, instead returning the number of seconds it took to execute on the GPU, as a floating-point number.\n\n\n\n"
},

{
    "location": "api.html#Event-Management-1",
    "page": "Driver API functionality",
    "title": "Event Management",
    "category": "section",
    "text": "CUDAdrv.CuEvent\nCUDAdrv.record\nCUDAdrv.synchronize(::CuEvent)\nCUDAdrv.elapsed\nCUDAdrv.@elapsed"
},

{
    "location": "api.html#CUDAdrv.cudacall",
    "page": "Driver API functionality",
    "title": "CUDAdrv.cudacall",
    "category": "Function",
    "text": "cudacall(f::CuFunction, griddim, blockdim, types, values; shmem=0, stream=CuDefaultStream())\ncudacall(f::CuFunction, griddim, blockdim, shmem::Integer, stream::CuStream, types, values)\n\nccall-like interface for launching a CUDA function f on a GPU.\n\nFor example:\n\nvadd = CuFunction(md, \"vadd\")\na = rand(Float32, 10)\nb = rand(Float32, 10)\nad = CuArray(a)\nbd = CuArray(b)\nc = zeros(Float32, 10)\ncd = CuArray(c)\n\ncudacall(vadd, 10, 1, (DevicePtr{Cfloat},DevicePtr{Cfloat},DevicePtr{Cfloat}), ad, bd, cd)\nc = Array(cd)\n\nThe griddim and blockdim arguments control the launch configuration, and should both consist of either an integer, or a tuple of 1 to 3 integers (omitted dimensions default to 1).\n\nBoth a version with and without keyword arguments is provided, the latter being faster. In addition, the types argument can contain both a tuple of types, and a tuple type, again the former being slightly faster.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.launch",
    "page": "Driver API functionality",
    "title": "CUDAdrv.launch",
    "category": "Function",
    "text": "launch(f::CuFunction, griddim::CuDim3, blockdim::CuDim3, shmem::Int, stream::CuStream, (args...))\n\nLow-level call to launch a CUDA function f on the GPU, using griddim and blockdim as respectively the grid and block configuration. Dynamic shared memory is allocated according to shmem, and the kernel is launched on stream stream.\n\nArguments to a kernel should either be bitstype, in which case they will be copied to the internal kernel parameter buffer, or a pointer to device memory.\n\nThis is a low-level call, prefer to use cudacall instead.\n\n\n\n"
},

{
    "location": "api.html#Execution-Control-1",
    "page": "Driver API functionality",
    "title": "Execution Control",
    "category": "section",
    "text": "CUDAdrv.cudacall\nCUDAdrv.launch"
},

{
    "location": "api.html#CUDAdrv.@profile",
    "page": "Driver API functionality",
    "title": "CUDAdrv.@profile",
    "category": "Macro",
    "text": "@profile ex\n\nRun expressions while activating the CUDA profiler.\n\nNote that this API is used to programmatically control the profiling granularity by allowing profiling to be done only on selective pieces of code. It does not perform any profiling on itself, you need external tools for that.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.Profile.start",
    "page": "Driver API functionality",
    "title": "CUDAdrv.Profile.start",
    "category": "Function",
    "text": "start()\n\nEnables profile collection by the active profiling tool for the current context. If profiling is already enabled, then this call has no effect.\n\n\n\n"
},

{
    "location": "api.html#CUDAdrv.Profile.stop",
    "page": "Driver API functionality",
    "title": "CUDAdrv.Profile.stop",
    "category": "Function",
    "text": "stop()\n\nDisables profile collection by the active profiling tool for the current context. If profiling is already disabled, then this call has no effect.\n\n\n\n"
},

{
    "location": "api.html#Profiler-Control-1",
    "page": "Driver API functionality",
    "title": "Profiler Control",
    "category": "section",
    "text": "CUDAdrv.@profile\nCUDAdrv.Profile.start\nCUDAdrv.Profile.stop"
},

{
    "location": "array.html#",
    "page": "Arrays",
    "title": "Arrays",
    "category": "page",
    "text": ""
},

{
    "location": "array.html#CUDAdrv.CuArray",
    "page": "Arrays",
    "title": "CUDAdrv.CuArray",
    "category": "Type",
    "text": "CuArray{T}(dims)\nCuArray{T,N}(dims)\n\nConstruct an uninitialized N-dimensional dense CUDA array with element type T, where N is determined from the length or number of dims. dims may be a tuple or a series of integer arguments corresponding to the lengths in each dimension. If the rank N is supplied explicitly as in Array{T,N}(dims), then it must match the length or number of dims.\n\nType aliases CuVector and CuMatrix are available for respectively 1 and 2-dimensional data.\n\n\n\n"
},

{
    "location": "array.html#Base.copy!-Union{Tuple{CUDAdrv.CuArray{T,N} where N,Array{T,N} where N}, Tuple{T}} where T",
    "page": "Arrays",
    "title": "Base.copy!",
    "category": "Method",
    "text": "copy!{T}(dst::CuArray{T}, src::Array{T})\n\nCopy an array from a host array src to a device array dst in place. Both arrays should have an equal length.\n\n\n\n"
},

{
    "location": "array.html#Base.copy!-Union{Tuple{Array{T,N} where N,CUDAdrv.CuArray{T,N} where N}, Tuple{T}} where T",
    "page": "Arrays",
    "title": "Base.copy!",
    "category": "Method",
    "text": "copy!{T}(dst::Array{T}, src::CuArray{T})\n\nCopy an array from a device array src to a host array dst in place. Both arrays should have an equal length.\n\n\n\n"
},

{
    "location": "array.html#Base.copy!-Union{Tuple{CUDAdrv.CuArray{T,N} where N,CUDAdrv.CuArray{T,N} where N}, Tuple{T}} where T",
    "page": "Arrays",
    "title": "Base.copy!",
    "category": "Method",
    "text": "copy!{T}(dst::CuArray{T}, src::CuArray{T})\n\nCopy an array from a device array src to a device array dst in place. Both arrays should have an equal length.\n\n\n\n"
},

{
    "location": "array.html#CUDAdrv.CuArray-Union{Tuple{Array{T,N}}, Tuple{N}, Tuple{T}} where N where T",
    "page": "Arrays",
    "title": "CUDAdrv.CuArray",
    "category": "Method",
    "text": "CuArray{T}(src::Array{T})\n\nTransfer a host array src to device, returning a CuArray.\n\n\n\n"
},

{
    "location": "array.html#Core.Array-Union{Tuple{CUDAdrv.CuArray{T,N}}, Tuple{N}, Tuple{T}} where N where T",
    "page": "Arrays",
    "title": "Core.Array",
    "category": "Method",
    "text": "Array{T}(g::CuArray{T})\n\nTransfer a device array src to host, returning an Array.\n\n\n\n"
},

{
    "location": "array.html#Arrays-1",
    "page": "Arrays",
    "title": "Arrays",
    "category": "section",
    "text": "CUDAdrv provides a primitive but useful array type to manage GPU data organized in an plain, dense fashion.CUDAdrv.CuArray\nCUDAdrv.copy!{T}(::CuArray{T}, ::Array{T})\nCUDAdrv.copy!{T}(::Array{T}, ::CuArray{T})\nCUDAdrv.copy!{T}(::CuArray{T}, ::CuArray{T})\nCUDAdrv.CuArray{T,N}(::Array{T,N})\nCUDAdrv.Array{T,N}(::CuArray{T,N})"
},

]}
