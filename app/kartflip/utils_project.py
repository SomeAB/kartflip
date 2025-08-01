"""
Contains helper functions for kartflip project itself
"""

# Core Python imports
import os


def get_secret(secret_name, fallback=None):
    """
    Reads a value from a Docker secret file or returns a hardcoded fallback.
    This is intended for sensitive details like database credentials.
    
    Args:
        secret_name (str): Name of the secret file (without path)
        fallback (str, optional): Fallback value if secret file is not found
        
    Returns:
        str: The secret value or fallback
    """
    secret_file_path = f'/run/secrets/{secret_name}'
    try:
        with open(secret_file_path, 'r') as f:
            return f.read().strip()
    except FileNotFoundError:
        print(f"WARNING: Secret file {secret_file_path} not found. Using fallback value.")
        return fallback


def get_env(env_var_name, default=None):
    """
    Reads a value from an environment variable or returns a default value.
    This is intended for non-sensitive configuration values.
    
    Args:
        env_var_name (str): Name of the environment variable
        default (str, optional): Default value if environment variable is not found
        
    Returns:
        str: The environment variable value or default
        
    Note:
        DEBUG mode info messages are handled in settings.py after DEBUG is defined
    """
    value = os.environ.get(env_var_name)
    if value is None:
        return default
    return value
