
class LogSerializer {
    static async getSummary(logs) {
          const allowedAttributes = ["date","weight"]
    
          let serializedLogs = {}
          for (const attribute of allowedAttributes) {
            serializedLogs[attribute] = logs[attribute]
        
          }
          return serializedLogs
        }
    }
    export default LogSerializer
    
