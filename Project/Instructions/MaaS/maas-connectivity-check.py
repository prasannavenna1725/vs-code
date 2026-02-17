from langchain_openai import ChatOpenAI
import os
import httpx
client = httpx.Client(verify=False)
llm = ChatOpenAI(
   base_url="https://genailab.tcs.in", # set openai_api_base to the LiteLLMProxy
   model = "azure_ai/genailab-maas-DeepSeek-V3-0324",
   api_key="sk-h4SzToxOqOneSAXq191PXA",
   http_client = client
)

print(llm.invoke("Hi"))